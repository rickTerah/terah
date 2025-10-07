export default function InfoCard() {
  return (
    <div className="flex-1">
      <div className="mb-8">
        <h1
          className="mb-4 font-bold text-gruvbox-light-fg
            dark:text-gruvbox-dark-fg text-xl"
        >
          {"> Hello World! ✋"}
        </h1>
        <h1
          className="font-bold text-gruvbox-light-fg dark:text-gruvbox-dark-fg
            text-2xl mb-2"
        >
          {"Patrick Mwangi"}
        </h1>
        <p className="mb-2 text-gruvbox-light-fg dark:text-gruvbox-dark-fg">
          {"Senior Software Engineer, Writer and Tech Advocate"}
        </p>
        <p className="text-gruvbox-light-fg/80 dark:text-gruvbox-dark-fg">
          {
            "I'm a software engineer with over six years of experience, passionate about building impactful digital solutions. I enjoy tackling complex challenges, especially those rooted in real-world problem-solving. From ideation to deployment, I’ve developed applications used across the country, helping shape how people live, work, and connect."
          }
        </p>
      </div>

      <div className="mb-8">
        <h1
          className="mb-4 font-bold text-gruvbox-light-fg
            dark:text-gruvbox-dark-fg text-xl"
        >
          {"> Bio 👨‍🎓"}
        </h1>
        <p className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg mb-1">
          <b className="font-bold text-lg">2018</b> - Started my career as a
          software engineer as a full-stack developer at Made by People.
        </p>
        <p className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg mb-1">
          <b className="font-bold text-lg">2019</b> - Completed my BSc in
          Mathematics and Computer Science at Kenyatta University.
        </p>
        <p className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg mb-1">
          <b className="font-bold text-lg">2020</b> - Joined Tospay Limited, a
          fintech startup, as a Software Engineer.
        </p>
        <p className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg mb-1">
          <b className="font-bold text-lg">2021</b> - Worked at Kwikbasket under
          TechnoBrain Group Ltd, an agritech startup, as a Senior Software
          Engineer.
        </p>

        <p className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg">
          <b className="font-bold text-lg">2021 to present</b> - Working at
          Pariti, a talent management platform, as a Head of Engineering.
        </p>
      </div>

      <div>
        <h1
          className="mb-4 font-bold text-gruvbox-light-fg
            dark:text-gruvbox-dark-fg text-xl"
        >
          {"> I Love ❤️"}
        </h1>
        <p className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg text-md">
          Art, Music, Mathematics, Nature, Hiking, Blockchain, Travelling and
          Technology.
        </p>
      </div>
    </div>
  );
}
