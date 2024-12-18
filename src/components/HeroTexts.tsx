import TextRotator from "./TextRotator";

export default function HeroTexts() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-4xl font-normal text-gray-700 dark:text-gray-200">My Name is</h3>
      <h1 className="text-9xl font-bold text-gray-900 dark:text-white">
        Mr.
        <br />
        L.C
        <span className="text-blue-500">.</span>
      </h1>
      <p className="text-2xl font-normal text-gray-700 dark:text-gray-200">
        I am a Software Developer & <span className="text-blue-500">Creator</span>
      </p>
    </div>
  );
}