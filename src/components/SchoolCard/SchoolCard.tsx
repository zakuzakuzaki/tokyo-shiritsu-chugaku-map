import { School } from '../../types/school';

interface Props {
  school: School;
}

export default function SchoolCard({ school }: Props) {
  return (
    <div className="border rounded p-2 mb-2">
      <h2 className="font-bold">{school.name}</h2>
      <p>{school.address}</p>
      <p>偏差値: {school.hensachi}</p>
      <p>{school.gender === 'coed' ? '共学' : school.gender === 'boys' ? '男子校' : '女子校'}</p>
      <p>学費(概算/年): {school.tuition.toLocaleString()}円</p>
    </div>
  );
}
