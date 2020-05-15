import React from "react";
import styled from "styled-components/macro";
import { string, func, arrayOf } from "prop-types";
import upperCaseName from "../../utils/upperCaseName";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 25px;
  background-color: dodgerblue;
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const Select = styled.select`
  width: 100%;
  height: 30px;
  font-size: 16px;
`;

const Form = styled.form`
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 5px;
  border: 2px solid;
  font-size: 16px;
`;

export default function Search({ query, onChange, breeds, randomBreed }) {
  return (
    <Wrapper>
      <Form>
        <Label forhtml="breeds">
          Select a breed and add it to your favorites list
        </Label>

        <Select id="breeds" onChange={onChange}>
          <option value="">Select a Breed</option>
          {breeds?.map((breed, index) => (
            <option value={breed} key={index}>
              {upperCaseName(breed)}
            </option>
          ))}
        </Select>
      </Form>
      <Button type="button" onClick={randomBreed}>
        Pick Random Breed
      </Button>
    </Wrapper>
  );
}

Search.propTypes = {
  query: string.isRequired,
  onChange: func.isRequired,
  breeds: arrayOf(string).isRequired,
  randomBreed: func.isRequired,
};
