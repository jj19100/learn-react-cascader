import styled from "styled-components";
const classPrefixPicker = "antdm-cascader";

export const Wrapper = styled.div`
  .${classPrefixPicker} {
    width: 100%;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .${classPrefixPicker}-header {
    flex: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 8px;
    &-button {
      font-size: 15px;
      display: inline-block;
      padding: 4px 4px;
      color: #1677ff;
    }
    &-title {
      padding: 4px 4px;
      font-size: 15px;
      color: #333;
      text-align: center;
      flex: 1;
    }
    &-confirm-disable {
      color: #999;
      &:hover {
        color: #999;
      }
    }
  }

  .${classPrefixPicker}-body {
    flex: auto;
    height: 100%;
    width: 100%;
    
    .adm-cascader-view {
      height: 310px;
    }
  }

`