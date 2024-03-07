import PropTypes from 'prop-types';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi'

const ChangeButton = ({ change = 0, showArrow = true }) => {
    change = Math.round(change * 100) / 100;
    return change > 0 ?
        <span className="ml-4 p-2 bg-success-1 rounded-lg flex items-center gap-1 text-success-6 text-sm">
            {showArrow ?
                <BiSolidUpArrow className="w-[20px] text-success-6" /> : "+"
            }

            {change || "-"}%
        </span> : <span className="ml-4 px-2 bg-warning-1 rounded-lg flex items-center gap-1 text-warning-6 text-sm">
            {showArrow ?
                <BiSolidDownArrow className="w-[20px] text-warning-6" /> : ""
            }

            {change || "-"}
        </span>
}

ChangeButton.prototype = {
    change: PropTypes.number.isRequired
}

export default ChangeButton
