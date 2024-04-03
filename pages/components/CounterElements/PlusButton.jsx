export default function PlusButton({ onClick }) {
    return (
      <button
        className="flex justify-center items-center px-5 bg-yellow-400 rounded-full h-[50px] w-[50px]"
        onClick={onClick}
      >
        +
      </button>
    );
}