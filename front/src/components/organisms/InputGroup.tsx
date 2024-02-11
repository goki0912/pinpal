import React, { useEffect, useRef } from 'react';
import Title from "../molecules/Title";
import Email from "../molecules/Email";
import Button from "../atoms/Button";
import ColorPicker from "../../hooks/ColorPicker";
import InputGroupName from "../molecules/InputGroupName";


interface InputGroupProps {
  title: string;
  subtitle: string;
  onClose: () => void; // モーダルを閉じる関数

}

const InputGroup: React.FC<InputGroupProps> = ({ title, subtitle, onClose =() => {} }) => {

  const modalRef = useRef(null); // モーダルの参照を作成

  // モーダルの外側のクリックを検出する処理
  useEffect(() => {
    const handleClickOutside = (event) => {
      
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(); // モーダルの外側がクリックされたら onClose 関数を呼び出す
      }
    };

    // ドキュメント全体にクリックイベントリスナーを追加
    document.addEventListener("mousedown", handleClickOutside);

    // クリーンアップ関数
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, modalRef]);





  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={onClose}>
      <div className="bg-white p-6 rounded-lg max-w-sm w-full mx-4" ref={modalRef} onClick={(e) => e.stopPropagation()}>
        <Title title={title} subtitle={subtitle} />
        <div className="flex gap-x-4 mx-6 mb-5 items-center">
          <ColorPicker />
          <InputGroupName name="家族と" />
        </div>
        {Array.from({ length:8 }).map((_, i) => (
          <Email key={i} />
        ))}
        <Button title="決定" onClick={onClose} />
      </div>
    </div>
  );
};
export default InputGroup;