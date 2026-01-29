import { cn } from "@/lib/utils";

export default function FAQS() {
  return (
    <>
    
      <Background>
        <Questions>What is Agenforce AI?</Questions>
        <Answers>
          Agenforce AI is a platform for building and managing AI agents.
        </Answers>
      </Background>

      <Background>
        <Questions>Who is Agenforce AI built for?</Questions>

        <Answers>
          Agenforce AI is a platform for building and managing AI agents.
        </Answers>
      </Background>
      <Background>
        <Questions>Is there a free trial available?</Questions>
        <Answers>
          Yes, we offer a 14-day free trial so you can explore all features
          before committing to a plan.
        </Answers>
      </Background>
      <Background>
        <Questions>How does Agenforce AI work?</Questions>
        <Answers>
          Agenforce AI is a platform for building and managing AI agents.
        </Answers>
      </Background>
      <Background>
        <Questions>What kind of support do you provide?</Questions>
        <Answers>
          We provide 24/7 customer support through chat, email, and
          comprehensive documentation to help you get the most out of Agenforce
          AI.
        </Answers>
      </Background>
    </>
  );
}

export function Background({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className=" items-center my-4 bg-neutral-200 rounded-lg p-4 dark:bg-neutral-700">
      {children}
    </div>
  );
}

export function Questions({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex justify-between items-center font-display text-lg md:text-2xl font-bold relative ",
        className,
      )}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="tabler-icon tabler-icon-minus size-6 black dark:text-white "
      >
        <path d="M5 12l14 0"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="tabler-icon tabler-icon-plus size-6 text-black dark:text-white "
      >
        <path d="M12 5l0 14"></path>
        <path d="M5 12l14 0"></path>
      </svg>
    </div>
  );
}

export function Answers({
  className,
  children,
 
}: {
  className?: string;
  children: React.ReactNode;
 
}) {
  return (
    <div
      className={cn(
        "max-w-4xl pt-2 md:text-lg dark:text-neutral-400  text-base font-semibold text-neutral-500   font-sans",
        className,
      )}
    >
      {children}
    </div>
  );
}
