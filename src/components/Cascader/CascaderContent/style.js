import styled from "styled-components";
const classPrefixPicker = "antdm-cascader-view";

export const Wrapper = styled.div`

  .${classPrefixPicker}-tabs {
    width: 100%;
    min-height: 40px;
    overflow: hidden;
    position: relative;
    display: flex;
    overflow-x: auto;

    .${classPrefixPicker}-tab {
      padding: 8px 12px 10px;
      max-width: 150px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .${classPrefixPicker}-tab-active {
      color: #1677ff;
      border-bottom: 2px solid #1677ff;
    }
  }
  .${classPrefixPicker}-content {
    height: 245px;
    overflow-y: auto;
  }
  .${classPrefixPicker}-list {
    font-size: 14px;

    .${classPrefixPicker}-item {
      padding-left: 12px;
      display: flex;
      align-items: center;
      &-main {
        flex: 1;
        padding: 12px 0;
      }
      &-extra {
        padding-right: 12px;
      }
      &-disabled {
        color: #999;
        cursor:not-allowed;
      }
      &:active {
        background-color: #eee;
      }
    }
    .${classPrefixPicker}-item-active {
      color: #1677ff;
    }
  }

`