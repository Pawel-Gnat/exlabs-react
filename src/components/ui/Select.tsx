interface SelectProps {
  gallerySize: number;
  setGallerySize: (value: number) => void;
}

export const Select = ({ gallerySize, setGallerySize }: SelectProps) => {
  return (
    <label className="self-end">
      <span className="font-bold">Gallery size:</span>
      <select
        name="gallerySize"
        value={gallerySize}
        onChange={(e) => setGallerySize(Number(e.target.value))}
        className="ml-2 rounded-xl border p-4 shadow-2xl"
      >
        <option className="mt-4" value="6">
          6
        </option>
        <option value="12">12</option>
        <option value="18">18</option>
      </select>
    </label>
  );
};
