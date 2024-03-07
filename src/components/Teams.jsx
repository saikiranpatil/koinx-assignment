import { teamsList } from "../constants"
import styles from "../style"

const Teams = () => {
  return (
    <div id="team" className={`bg-white rounded-lg ${styles.padding} my-4`}>
      <h1 className="font-semibold text-[24px] text-black-10 mb-4">Team</h1>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vitae dignissimos perspiciatis? Labore, atque molestias! Consequuntur sapiente enim cum necessitatibus?
      </p>
      <div className="flex flex-col gap-4">
        {teamsList.map((teamMember, index) => (
          <div className="w-full p-4 bg-primary-5/20 rounded-lg" key={"team-member-" + index} >
            <div className="flex float-left flex-col items-center gap-2 mr-4">
              <img src={teamMember.imageLink} className="h-[100px] w-[100px] rounded-lg" alt="" />
              <h1 className="text-center font-semibold text-[16px]">
                {teamMember.name}
                <div className="text-[12px] font-normal">{teamMember.designation}</div>
              </h1>
            </div>
            <p className="ml-4 my-8 h-full text-[14px]">
              {teamMember.description}
            </p>
          </div>
        ))}
      </div>
    </div >
  )
}

export default Teams
