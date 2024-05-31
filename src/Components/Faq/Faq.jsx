import { FaQuestion } from "react-icons/fa";

const Faq = () => {
    return (
    <div className="container  py-12 mx-auto lg:px-20 px-6">
    <h1 className="text-2xl font-semibold  lg:text-3xl ">Frequently asked questions.</h1>

    <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
        <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
            <FaQuestion />
            </div>

            <div>
                <h1 className="text-xl font-semibold ">How do I become a volunteer?</h1>

                <p className="mt-2 text-sm  ">
                Provide information on the steps to apply, whether its filling out an online form, attending an orientation session, or contacting a specific person or department.
                </p>
            </div>
        </div>

        <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
            <FaQuestion />
            </div>

            <div>
                <h1 className="text-xl font-semibold  ">What kind of volunteer opportunities do you offer?</h1>

                <p className="mt-2 text-sm ">
                Describe the different roles available, such as event support, administrative tasks, fundraising, mentoring, etc., along with any requirements or qualifications for each role.
                </p>
            </div>
        </div>

        <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
            <FaQuestion />
            </div>

            <div>
                <h1 className="text-xl font-semibold  ">What is the time commitment expected from volunteers?</h1>

                <p className="mt-2 text-sm  ">
                Clarify whether volunteers are expected to commit to a certain number of hours per week or month, and whether there are flexible scheduling options available.
                </p>
            </div>
        </div>

        <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
            <FaQuestion />
            </div>

            <div>
                <h1 className="text-xl font-semibold  ">Do volunteers need to undergo background checks or screenings?</h1>

                <p className="mt-2 text-sm ">
                Inform potential volunteers about any background check or screening processes required for certain roles, and how they can complete these requirements.
                </p>
            </div>
        </div>

        <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
            <FaQuestion />
            </div>

            <div>
                <h1 className="text-xl font-semibold ">Can I volunteer as part of a group or organization?</h1>

                <p className="mt-2 text-sm  ">
                Explain whether group volunteering is encouraged and how organizations or businesses can get involved in group volunteer activities.

                </p>
            </div>
        </div>

        <div>
            <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
            <FaQuestion />
            </div>

            <div>
                <h1 className="text-xl font-semibold">What safety measures are in place for volunteers??</h1>

                <p className="mt-2 text-sm  ">
                Assure volunteers of their safety by describing any safety protocols, insurance coverage, emergency procedures, and resources available to address concerns.
                </p>
            </div>
        </div>
    </div>
</div>

    );
};

export default Faq;