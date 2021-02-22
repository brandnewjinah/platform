import React, { FC } from "react";

//import librart
import Select from "react-select";

//import styles and assets
import styled from "styled-components";
import { colors } from "./StyleVariables";

interface Props {
  data: {}[];
  label?: string;
  margin?: string;
}

type StyleProps = {
  margin?: string | undefined;
};

const ReactSelect: FC<Props> = ({ data, label, margin }) => {
  const customStyles = {
    control: (styles: any) => ({
      ...styles,
      border: 0,
      borderRadius: 0,
      borderBottom: `1px solid #d2d2d7`,
      boxShadow: "none",
      paddingTop: `.265em`,
      paddingBottom: `.265em`,
      minWidth: `auto`,
    }),
    // placeholder: (styles: any) => ({
    //   ...styles,
    //   fontSize: `.925rem`,
    //   position: `static`,
    //   color: `${colors.lightergray}`,
    //   top: `auto`,
    //   transform: `none`,
    // }),
    multiValue: (styles: any) => ({
      ...styles,
      backgroundColor: `transparent`,
    }),
    multiValueLabel: (styles: any) => ({
      ...styles,
      color: `#de576d`,
      fontSize: `1rem`,
    }),
  };

  return (
    <Wrapper margin={margin}>
      <p>{label}</p>
      <Select
        isMulti
        options={data}
        // placeholder="Select all"
        styles={customStyles}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
          ClearIndicator: () => null,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div<StyleProps>`
  margin: ${(props) => `${props.margin} 0`};

  p {
    font-size: 0.925rem;
    color: ${colors.gray};
  }
`;

export default ReactSelect;
