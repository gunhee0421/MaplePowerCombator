import dummy from "../DB/data.json";

export default function GetMultiple(job: string) {
  for (let i = 0; i < dummy.job.length; i++) {
    if (dummy.job[i].name === job) {
      return dummy.job[i].mul;
    }
  }
  return "0";
}
