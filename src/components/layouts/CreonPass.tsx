import CreonPassLeft from "../molecules/CreonPassLeft";
import CreonPassRight from "../molecules/CreonPassRight";

export default function CreonPass() {
    return (
      <section className="flex flex-col px-[15px] md:px-[30px] lg:px-0 lg:flex-row  relative overflow-hidden my-[37px] xl:my-[81px] xl:px-[190px] ">
        <CreonPassLeft />
        <CreonPassRight />
      </section>
    );
}