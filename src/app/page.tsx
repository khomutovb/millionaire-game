import { ScreenCard } from "@/components/game/ScreenCard/ScreenCard";

export default function HomePage() {
  return (
    <ScreenCard
      withGradient
      imageSrc="/hand-icon.svg"
      imageAlt="Thumbs up illustration"
      title="Who wants to be a millionaire?"
      action={{ kind: "link", href: "/game", label: "Start" }}
    />
  );
}
