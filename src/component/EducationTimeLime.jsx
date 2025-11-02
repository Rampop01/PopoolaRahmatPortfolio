import {
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import {
  HomeIcon,
  BellIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";

function EducationTimeLine() {
  return (
    <div className="w-[32rem] flex flex-col relative">
      <Timeline>
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <HomeIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography
              variant="h5"
              color="blue-gray"
              className="lg:text-[24px]"
            >
              Ahmadu Bello University, Kaduna
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-slate-400">
              BSC. Zoology.<br></br> 2015 - 2020.
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <div className="connector-line" />
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <BellIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography
              variant="h5"
              color="blue-gray"
              className="lg:text-[24px]"
            >
              TIIDELab Initiative
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gray"
              className="font-normal text-slate-400 lg:text-[18px]"
            >
              Frontend Development. <br></br> June 2024 - December 2024
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <div className="connector-line" />
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <CurrencyDollarIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography
              variant="h5"
              color="blue-gray"
              className="lg:text-[24px]"
            >
              Web3Bridge Advance Web2
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              color="gray"
              className="font-normal text-slate-400 lg:text-[18px]"
            >
              Frontend Development<br></br> May 2024 - August 2024
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <div className="connector-line" />
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <AcademicCapIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography
              variant="h5"
              color="blue-gray"
              className="lg:text-[24px]"
            >
              Web3Bridge Solidity
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="gray" className="font-normal text-slate-400">
              Solidity Development.<br></br> January 2025 - May 2025
            </Typography>
          </TimelineBody>
        </TimelineItem>
        <div className="connector-line" />
        <TimelineItem>
          <TimelineHeader>
            <TimelineIcon className="p-2">
              <CodeBracketIcon className="h-4 w-4" />
            </TimelineIcon>
            <Typography
              variant="h5"
              color="blue-gray"
              className="lg:text-[24px]"
            >
              Web3Bridge Rust Masterclass
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography color="gray" className="font-normal text-slate-400">
              Rust Programming.<br></br> June 2025 - November 2025
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default EducationTimeLine;
