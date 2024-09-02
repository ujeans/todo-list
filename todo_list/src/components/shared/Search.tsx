import styled from "@emotion/styled";
import { colors } from "../../styles/colorPalette";
import { typographyMap } from "@/styles/typoGraphy";

const Search = styled.input`
  width: 1000px;
  height: 56px;
  padding: 0 24px;
  background-color: ${colors.slate100};
  border: 2px solid ${colors.slate900};
  border-radius: 24px;
  box-sizing: border-box;
  box-shadow: 4px 4px ${colors.slate900};
  color: ${colors.slate900};
  ${typographyMap.t5};

  ::placeholder {
    color: ${colors.slate500};
  }
`;

export default Search;
