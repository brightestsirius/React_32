import ModuleButton from "./ModuleButton";
import TailwindButton from "./TailwindButton";
import ShadcnButton from "./ShadcnButton";
import ShadcnTailwindButton from "./ShadcnTailwindButton";

export default function StylesDemo() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <div>
        <h4>CSS Modules</h4>
        <ModuleButton />
      </div>

      <div>
        <h4>Tailwind CSS</h4>
        <TailwindButton />
      </div>

      <div>
        <h4>shadcn/ui</h4>
        <ShadcnButton />
      </div>

      <div>
        <h4>shadcn + Tailwind</h4>
        <ShadcnTailwindButton />
      </div>
    </div>
  );
}
