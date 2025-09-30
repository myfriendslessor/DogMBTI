import ProgressBar from '../ProgressBar';

export default function ProgressBarExample() {
  return (
    <div className="p-8 max-w-md">
      <ProgressBar current={23} total={60} />
    </div>
  );
}
