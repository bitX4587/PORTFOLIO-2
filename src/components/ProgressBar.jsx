export default function ProgressBar() {
  return (
    <>
      <style>
        {`
          @keyframes growLine {
            0%   { width: 0%;   background-color: #fee2e2; }
            20%  { width: 20%;  background-color: #fca5a5; }
            50%  { width: 50%;  background-color: #f87171; }
            80%  { width: 80%;  background-color: #ef4444; }
            100% { width: 100%; background-color: #b91c1c; }
          }

          .custom-progress-bar {
            animation: growLine 5s ease-out forwards;
            height: 100%;
            border-radius: 9999px;
          }
        `}
      </style>

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="w-1/2 h-2 bg-white rounded-full overflow-hidden">
          <div className="custom-progress-bar" />
        </div>
      </div>
    </>
  );
}
