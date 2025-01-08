interface InfoItemProps {
  label: string;
  value: string;
}

const InfoItem = ({ label, value }: InfoItemProps) => (
  <div className="flex justify-between items-center py-2 border-b border-gray-800">
    <span>{`${label}:`}</span>
    <span>{value}</span>
  </div>
);

export default InfoItem;
