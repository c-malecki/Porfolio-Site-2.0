import format from "date-fns/format";

export const reformatDate = (date) => {
  return format(new Date(date), "Pp");
};
