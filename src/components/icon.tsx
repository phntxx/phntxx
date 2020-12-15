import React from "react";
import styled from "@emotion/styled";

import linkedInLogo from "../img/logos/linkedin.png";
import twitterLogo from "../img/logos/twitter.png";
import githubLogo from "../img/logos/github.png";

interface IIconProps {
  name: string;
  alt?: string;
  link?: string;
}

const Image = styled.img`
  display: block;
  cursor: pointer;
  height: 100%;
  width: auto;

  transition: transform 0.5s;

  &:hover {
    transform: scale(1.25);
  }
`;

const onClick = (link: string) => {
  if (link !== "") window.location.href = link;
};

const Icon = (props: IIconProps) => {
  let logo;
  switch (props.name.toLowerCase()) {
    case "linkedin":
      logo = linkedInLogo;
      break;
    case "twitter":
      logo = twitterLogo;
      break;
    case "github":
      logo = githubLogo;
      break;
  }

  return (
    <Image
      src={logo}
      alt={props.alt ?? ""}
      onClick={() => onClick(props.link ?? "")}
    />
  );
};

export default Icon;
