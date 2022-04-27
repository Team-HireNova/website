import Tag, { TagProps } from "components/Tag";
import styled from "styled-components";

const Wrapper = styled(Tag)``;

export type JobTypeIdType =
  | "full_time"
  | "part_time"
  | "internship"
  | "contract";

export interface JobTypeProps extends Omit<TagProps, "children"> {
  jobTypeId: JobTypeIdType;
}

export const jobTypes: { [key in JobTypeIdType]: { label: string } } = {
  full_time: { label: "Full-time" },
  part_time: { label: "Part-time" },
  internship: { label: "Internship" },
  contract: { label: "Contract" },
};

const JobType = ({ className, jobTypeId, ...props }: JobTypeProps) => {
  return (
    <Wrapper className={className} {...props}>
      {jobTypes[jobTypeId].label}
    </Wrapper>
  );
};

export default JobType;
