"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { QuoteFormSchema, MIN_PREPARATION_DAYS } from "@/lib/validations";
import { z } from "zod";

export function QuoteForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    mealCount: "200",
    mealType: "",
    startDate: "",
    duration: "12 tháng (Hợp đồng năm)",
    requirements: "",
    address: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Tính ngày tối thiểu được chọn (hôm nay + 3 ngày để bếp chuẩn bị quy trình & nguyên liệu)
  const minDateObj = new Date();
  minDateObj.setDate(minDateObj.getDate() + MIN_PREPARATION_DAYS);
  const minStartDateString = minDateObj.toISOString().split("T")[0];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Xóa lỗi ngay khi người dùng bắt đầu gõ sửa
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  // Xử lý riêng cho ô Tên người liên hệ: Chặn hoàn toàn không cho nhập chữ số
  const handleContactPersonChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const cleanValue = e.target.value.replace(/\d/g, "");
    setFormData((prev) => ({ ...prev, contactPerson: cleanValue }));

    if (fieldErrors.contactPerson) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated.contactPerson;
        return updated;
      });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  // Validate một trường cụ thể khi người dùng blur khỏi ô nhập
  const handleBlur = (field: string) => {
    try {
      const payload = {
        ...formData,
        mealCount: parseInt(formData.mealCount, 10) || 0,
      };
      QuoteFormSchema.pick({ [field]: true } as any).parse(payload);
      if (fieldErrors[field]) {
        setFieldErrors((prev) => {
          const updated = { ...prev };
          delete updated[field];
          return updated;
        });
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        const issue = err.issues[0];
        if (issue) {
          setFieldErrors((prev) => ({ ...prev, [field]: issue.message }));
        }
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setErrorMessage("");

    const payload = {
      ...formData,
      mealCount: parseInt(formData.mealCount, 10) || 0,
    };

    // 1. Kiểm tra validation ngay tại Client bằng Zod trước khi gửi
    const validationResult = QuoteFormSchema.safeParse(payload);
    if (!validationResult.success) {
      const errors: Record<string, string> = {};
      for (const issue of validationResult.error.issues) {
        const path = issue.path[0];
        if (path && typeof path === "string" && !errors[path]) {
          errors[path] = issue.message;
        }
      }
      setFieldErrors(errors);
      setStatus("error");
      setErrorMessage(
        "Vui lòng kiểm tra lại các trường thông tin báo đỏ bên dưới!",
      );
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/bao-gia", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validationResult.data),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        throw new Error(data.error || "Có lỗi xảy ra khi gửi yêu cầu báo giá.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage(
          "Không thể gửi yêu cầu. Vui lòng kiểm tra lại kết nối mạng!",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 sm:p-12 text-center animate-in fade-in duration-300">
        <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Gửi Yêu Cầu Báo Giá Thành Công!
        </h3>
        <p className="text-gray-600 max-w-lg mx-auto mb-6 text-sm sm:text-base leading-relaxed">
          Cảm ơn quý khách hàng đã quan tâm. Bộ phận kinh doanh và dinh dưỡng sẽ
          liên hệ lại trực tiếp qua số điện thoại{" "}
          <strong className="text-gray-900">{formData.phone}</strong> và gửi
          bảng phân tích chi phí qua email trong vòng 30 phút.
        </p>
        <Button
          onClick={() => {
            setStatus("idle");
            setFormData({
              companyName: "",
              contactPerson: "",
              phone: "",
              email: "",
              mealCount: "200",
              mealType: "",
              startDate: "",
              duration: "12 tháng (Hợp đồng năm)",
              requirements: "",
              address: "",
            });
            setFieldErrors({});
          }}
          variant="outline"
          className="border-green-600 text-green-700 hover:bg-green-50 cursor-pointer"
        >
          Gửi yêu cầu báo giá khác
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {status === "error" && errorMessage && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700 text-sm animate-in fade-in">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Group 1: Thông tin doanh nghiệp & liên hệ */}
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-5">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center shrink-0">
            1
          </span>
          <span>Thông Tin Doanh Nghiệp & Người Liên Hệ</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <Label
              htmlFor="companyName"
              className="font-semibold text-gray-800"
            >
              Tên doanh nghiệp / Nhà máy <span className="text-red-500">*</span>
            </Label>
            <Input
              id="companyName"
              name="companyName"
              placeholder="VD: Công ty TNHH May Mặc Hưng Phát"
              value={formData.companyName}
              onChange={handleChange}
              onBlur={() => handleBlur("companyName")}
              className={
                fieldErrors.companyName
                  ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                  : ""
              }
            />
            {fieldErrors.companyName ? (
              <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {fieldErrors.companyName}
              </p>
            ) : (
              <p className="text-xs text-gray-500">
                Tên pháp nhân hoặc tên nhà xưởng sản xuất
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label
              htmlFor="contactPerson"
              className="font-semibold text-gray-800"
            >
              Người đại diện liên hệ <span className="text-red-500">*</span>
            </Label>
            <Input
              id="contactPerson"
              name="contactPerson"
              placeholder="VD: Nguyễn Văn A (Trưởng phòng HCNS)"
              value={formData.contactPerson}
              onChange={handleContactPersonChange}
              onBlur={() => handleBlur("contactPerson")}
              className={
                fieldErrors.contactPerson
                  ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                  : ""
              }
            />
            {fieldErrors.contactPerson ? (
              <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {fieldErrors.contactPerson}
              </p>
            ) : (
              <p className="text-xs text-gray-500">
                Chỉ nhập chữ cái họ tên (không cho phép nhập số)
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phone" className="font-semibold text-gray-800">
              Số điện thoại di động / Zalo{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="VD: 0912 345 678"
              value={formData.phone}
              onChange={handleChange}
              onBlur={() => handleBlur("phone")}
              className={
                fieldErrors.phone
                  ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                  : ""
              }
            />
            {fieldErrors.phone ? (
              <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {fieldErrors.phone}
              </p>
            ) : (
              <p className="text-xs text-gray-500">
                Số di động 10 số (VD: 09xx, 08xx, 03xx, 07xx)
              </p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email" className="font-semibold text-gray-800">
              Email công việc (Nhận bảng báo giá){" "}
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="VD: contact@doanhnghiep.vn"
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
              className={
                fieldErrors.email
                  ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                  : ""
              }
            />
            {fieldErrors.email ? (
              <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {fieldErrors.email}
              </p>
            ) : (
              <p className="text-xs text-gray-500">
                Email nhận file PDF báo giá & bảng tính định lượng
              </p>
            )}
          </div>
        </div>

        <div className="space-y-1.5 pt-1">
          <Label htmlFor="address" className="font-semibold text-gray-800">
            Địa chỉ cơ sở / Nhà xưởng nhận suất ăn{" "}
            <span className="text-red-500">*</span>
          </Label>
          <Input
            id="address"
            name="address"
            placeholder="VD: Lô CN-08, KCN Quế Võ 3, Phường Nam Sơn, TP. Bắc Ninh"
            value={formData.address}
            onChange={handleChange}
            onBlur={() => handleBlur("address")}
            className={
              fieldErrors.address
                ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                : ""
            }
          />
          {fieldErrors.address ? (
            <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              {fieldErrors.address}
            </p>
          ) : (
            <p className="text-xs text-gray-500">
              Địa chỉ cụ thể giúp đội xe tính toán lộ trình giao cơm nóng sốt
              đúng giờ
            </p>
          )}
        </div>
      </div>

      {/* Group 2: Nhu cầu suất ăn */}
      <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-5">
        <h3 className="text-base sm:text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 text-xs font-bold flex items-center justify-center shrink-0">
            2
          </span>
          <span>Quy Mô & Yêu Cầu Phục Vụ</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Cột Trái 1: Số lượng suất ăn */}
          <div className="space-y-1.5">
            <Label htmlFor="mealCount" className="font-semibold text-gray-800">
              Số lượng suất ăn / ngày <span className="text-red-500">*</span>
            </Label>
            <Input
              id="mealCount"
              name="mealCount"
              type="number"
              min="50"
              max="50000"
              placeholder="VD: 200 (Tối thiểu 50 suất)"
              value={formData.mealCount}
              onChange={handleChange}
              onBlur={() => handleBlur("mealCount")}
              className={
                fieldErrors.mealCount
                  ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                  : ""
              }
            />
            {fieldErrors.mealCount ? (
              <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {fieldErrors.mealCount}
              </p>
            ) : (
              <p className="text-xs text-gray-500">
                Quy mô phục vụ tối thiểu từ 50 suất/ngày trở lên
              </p>
            )}
          </div>

          {/* Cột Phải 1: Hình thức / Ca phục vụ */}
          <div className="space-y-1.5">
            <Label htmlFor="mealType" className="font-semibold text-gray-800">
              Hình thức / Ca phục vụ <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.mealType}
              onValueChange={(val) => handleSelectChange("mealType", val)}
            >
              <SelectTrigger
                id="mealType"
                className={fieldErrors.mealType ? "border-red-500" : ""}
              >
                <SelectValue placeholder="-- Chọn hình thức / ca phục vụ --" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bua-trua">
                  Chỉ bữa trưa (Ca chính)
                </SelectItem>
                <SelectItem value="bua-sang">Bữa sáng</SelectItem>
                <SelectItem value="bua-toi">Bữa tối</SelectItem>
                <SelectItem value="bua-dem">Bữa ăn ca đêm / Tăng ca</SelectItem>
                <SelectItem value="tron-goi">
                  Trọn gói cả ngày (Sáng - Trưa - Tối/Đêm)
                </SelectItem>
              </SelectContent>
            </Select>
            {fieldErrors.mealType ? (
              <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {fieldErrors.mealType}
              </p>
            ) : (
              <p className="text-xs text-gray-500">
                Lựa chọn các ca ăn trong ngày cần cung cấp
              </p>
            )}
          </div>

          {/* Cột Trái 2: Thời gian bắt đầu */}
          <div className="space-y-1.5">
            <Label htmlFor="startDate" className="font-semibold text-gray-800">
              Thời gian dự kiến bắt đầu phục vụ{" "}
              <span className="text-red-500">*</span>
            </Label>
            <Input
              id="startDate"
              name="startDate"
              type="date"
              min={minStartDateString}
              value={formData.startDate}
              onChange={handleChange}
              onBlur={() => handleBlur("startDate")}
              className={
                fieldErrors.startDate
                  ? "border-red-500 focus:ring-red-200 focus:border-red-500"
                  : ""
              }
            />
            {fieldErrors.startDate ? (
              <p className="text-xs text-red-600 flex items-center gap-1 mt-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                {fieldErrors.startDate}
              </p>
            ) : (
              <p className="text-xs text-gray-500">
                Đặt trước tối thiểu {MIN_PREPARATION_DAYS} ngày để chuẩn bị vận
                hành
              </p>
            )}
          </div>

          {/* Cột Phải 2: Thời hạn hợp đồng */}
          <div className="space-y-1.5">
            <Label htmlFor="duration" className="font-semibold text-gray-800">
              Thời hạn hợp đồng dự kiến
            </Label>
            <Select
              value={formData.duration}
              onValueChange={(val) => handleSelectChange("duration", val)}
            >
              <SelectTrigger id="duration">
                <SelectValue placeholder="Chọn thời hạn hợp đồng" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Dưới 3 tháng (Thử nghiệm / Dự án ngắn)">
                  Dưới 3 tháng (Thử nghiệm / Dự án ngắn)
                </SelectItem>
                <SelectItem value="6 tháng">6 tháng</SelectItem>
                <SelectItem value="12 tháng (Hợp đồng năm)">
                  12 tháng
                </SelectItem>
                <SelectItem value="Dài hạn trên 2 năm">
                  Dài hạn trên 2 năm
                </SelectItem>
              </SelectContent>
            </Select>
            <p className="text-xs text-gray-500">
              Hỗ trợ ăn thử nghiệm miễn phí trước khi ký chính thức
            </p>
          </div>
        </div>

        <div className="space-y-1.5 pt-1">
          <Label htmlFor="requirements" className="font-semibold text-gray-800">
            Yêu cầu riêng biệt (Đơn giá mục tiêu/suất, yêu cầu ăn chay, chia
            khay hay nấu tại chỗ...)
          </Label>
          <Textarea
            id="requirements"
            name="requirements"
            rows={4}
            placeholder="VD: Chúng tôi cần định mức 28.000đ - 35.000đ/suất, chia sẵn khay inox chuyển đến, có khoảng 15 suất chay mỗi ngày..."
            value={formData.requirements}
            onChange={handleChange}
          />
          <p className="text-xs text-gray-500">
            Tùy chọn: Giúp chuyên viên xây dựng thực đơn chính xác nhất cho
            doanh nghiệp
          </p>
        </div>
      </div>

      <Button
        type="submit"
        disabled={loading}
        size="lg"
        className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 sm:py-6 px-4 text-sm sm:text-base shadow-lg shadow-green-700/20 cursor-pointer flex items-center justify-center gap-2 transition-all hover:shadow-xl min-h-[48px]"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin shrink-0" />
            <span>Đang kiểm tra & gửi thông tin...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
            <span>Gửi Yêu Cầu Báo Giá & Nhận Thực Đơn Mẫu</span>
          </>
        )}
      </Button>
      <p className="text-xs text-center text-gray-500">
        Thông tin của quý khách được bảo mật tuyệt đối theo cam kết chính sách
        bảo vệ dữ liệu khách hàng doanh nghiệp.
      </p>
    </form>
  );
}
