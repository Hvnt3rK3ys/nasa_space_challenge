import React, { useState } from "react";
import { DatePicker } from "@nextui-org/react";
import { DateValue, parseDate, getLocalTimeZone } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import styles from "../../styles/sHome/F_Date.module.scss";

interface FilterDateProps {
  className?: string;
}

const FilterDate: React.FC<FilterDateProps> = ({ className }) => {
  const [value, setValue] = useState<DateValue>(parseDate("2024-04-04"));
  const formatter = useDateFormatter({ dateStyle: "full" });

  return (
    <section className={`${styles.globalDate} ${className}`}>
      <div className="flex flex-row gap-2">
        <div className="w-full flex flex-col gap-y-2">
          <DatePicker
            className="max-w-[284px]"
            label="Date (controlled)"
            value={value}
            onChange={setValue}
          />
          <p className="text-default-500 text-sm">
            Selected date: {value ? formatter.format(value.toDate(getLocalTimeZone())) : "--"}
          </p>
        </div>
        <DatePicker
          className="max-w-[284px]"
          defaultValue={parseDate("2024-04-04")}
          label="Date (uncontrolled)"
        />
      </div>
    </section>
  );
};

export default FilterDate;
