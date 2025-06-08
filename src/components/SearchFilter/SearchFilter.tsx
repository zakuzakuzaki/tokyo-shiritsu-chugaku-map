export interface FilterValues {
  name: string;
  gender: string;
  minHensachi: number;
  maxHensachi: number;
  minTuition: number;
  maxTuition: number;
}

interface Props {
  values: FilterValues;
  onChange: (v: FilterValues) => void;
}

export default function SearchFilter({ values, onChange }: Props) {
  const handle = (field: keyof FilterValues, value: string | number) => {
    onChange({ ...values, [field]: value });
  };

  return (
    <div className="p-2 space-y-2">
      <input
        type="text"
        placeholder="学校名で検索"
        value={values.name}
        onChange={(e) => handle('name', e.target.value)}
        className="border rounded p-1 w-full"
      />
      <select
        value={values.gender}
        onChange={(e) => handle('gender', e.target.value)}
        className="border rounded p-1 w-full"
      >
        <option value="">共学/男子校/女子校</option>
        <option value="coed">共学</option>
        <option value="boys">男子校</option>
        <option value="girls">女子校</option>
      </select>
      <div className="flex space-x-2">
        <input
          type="number"
          placeholder="最小偏差値"
          value={values.minHensachi}
          onChange={(e) => handle('minHensachi', Number(e.target.value))}
          className="border rounded p-1 w-full"
        />
        <input
          type="number"
          placeholder="最大偏差値"
          value={values.maxHensachi}
          onChange={(e) => handle('maxHensachi', Number(e.target.value))}
          className="border rounded p-1 w-full"
        />
      </div>
      <div className="flex space-x-2">
        <input
          type="number"
          placeholder="最小学費"
          value={values.minTuition}
          onChange={(e) => handle('minTuition', Number(e.target.value))}
          className="border rounded p-1 w-full"
        />
        <input
          type="number"
          placeholder="最大学費"
          value={values.maxTuition}
          onChange={(e) => handle('maxTuition', Number(e.target.value))}
          className="border rounded p-1 w-full"
        />
      </div>
    </div>
  );
}
