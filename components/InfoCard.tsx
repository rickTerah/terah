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

        <p className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg mb-1">
          <b className="font-bold text-lg">2021 to present</b> - Working at
          Pariti, a talent management platform, as a Head of Engineering.
        </p>
        <p className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg mb-1">
          <b className="font-bold text-lg">2022</b> - Led engineering team
          expansion from 5 to 15+ engineers, implementing scalable development
          practices.
        </p>
        <p className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg mb-1">
          <b className="font-bold text-lg">2023</b> - Architected and deployed
          microservices infrastructure improving system reliability by 99.9%.
        </p>
        <p className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg mb-1">
          <b className="font-bold text-lg">2024</b> - Spearheaded AI integration
          initiatives and established engineering best practices across the
          organization.
        </p>
        <p className="text-gruvbox-light-fg dark:text-gruvbox-dark-fg">
          <b className="font-bold text-lg">2025</b> - Currently leading digital
          transformation initiatives and mentoring next-generation engineering
          leaders.
        </p>
      </div>

      <div className="mb-8">
        <h1
          className="mb-4 font-bold text-gruvbox-light-fg
            dark:text-gruvbox-dark-fg text-xl"
        >
          {"> Download Resume 📄"}
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/resume.pdf"
            download="patrick-mwangi-resume.pdf"
            className="inline-flex items-center justify-center px-4 py-2
              bg-gruvbox-light-accent dark:bg-gruvbox-dark-accent text-white
              rounded-md hover:bg-gruvbox-light-accent/90
              dark:hover:bg-gruvbox-dark-accent/90 transition-colors"
          >
            Download PDF Resume
          </a>
          <a
            href="/resume.docx"
            download="patrick-mwangi-resume.docx"
            className="inline-flex items-center justify-center px-4 py-2 border
              border-gruvbox-light-fg dark:border-gruvbox-dark-fg
              text-gruvbox-light-fg dark:text-gruvbox-dark-fg rounded-md
              hover:bg-gruvbox-light-fg/10 dark:hover:bg-gruvbox-dark-fg/10
              transition-colors"
          >
            Download Word Resume
          </a>
        </div>
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
