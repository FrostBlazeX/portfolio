import { profile } from "@/data/profile";

export function ProfileCard() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        Hi, I'm Evan Ohemi
      </h1>
      <p className="font-semibold text-2xl">Frontend Developer</p>

      <p className="text-lg text-muted-foreground">{profile.shortBio}</p>
    </div>
  );
}
