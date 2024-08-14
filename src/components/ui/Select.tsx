interface SelectProps {
  gallerySize: number;
  setGallerySize: (value: number) => void;
}

export const Select = ({ gallerySize, setGallerySize }: SelectProps) => {
  return (
    <label>
      size:
      <select
        name="gallerySize"
        value={gallerySize}
        onChange={(e) => setGallerySize(Number(e.target.value))}
      >
        <option value="6">6</option>
        <option value="12">12</option>
        <option value="18">18</option>
      </select>
    </label>
  );
};
