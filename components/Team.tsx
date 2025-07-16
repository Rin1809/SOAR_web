import React from 'react';
import { Card } from './ui/Card';

const students = [
  "NGUYỄN HOÀNG GIA HƯNG",
  "LÊ TRUNG KIÊN",
  "HÀ TIẾN HOÀNG"
];

const instructor = "NGUYỄN THẾ PHƯƠNG";

export const Team: React.FC = () => {
  return (
    <Card>
      <h2 className="poetic-title text-center mb-6">Thành viên thực hiện</h2>
      <div className="flex flex-col md:flex-row justify-around items-center text-center">
        <div>
          <h3 className="poetic-subtitle !text-lg !text-[var(--primary-color)] mb-2">Sinh viên</h3>
          <ul className="space-y-1 poetic-description">
            {students.map(name => <li key={name}>{name}</li>)}
          </ul>
        </div>
        <div className="mt-6 md:mt-0">
          <h3 className="poetic-subtitle !text-lg !text-[var(--primary-color)] mb-2">Giảng viên hướng dẫn</h3>
          <p className="poetic-description">{instructor}</p>
        </div>
      </div>
       <p className="text-center text-sm text-[var(--subtext-color-poetic)] opacity-70 mt-6">
        Từ Đồ án Tốt nghiệp tại TRƯỜNG CAO ĐẲNG AN NINH MẠNG ISPACE
      </p>
    </Card>
  );
};