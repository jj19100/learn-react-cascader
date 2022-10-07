import React from "react";
import { Wrapper } from "./style";

const classPrefix = `antdm-cascader`

export const CascaderHead = function (props) {

  return <Wrapper>
    <div className={classPrefix}>
      <div className={`${classPrefix}-header`}>
        <a
          className={`${classPrefix}-header-button`}
          onClick={() => {
            props.onCancel?.()
          }}
        >
          {props.cancelText || "取消"}
        </a>
        <div className={`${classPrefix}-header-title`}>{props.title}</div>
        <a
          className={`${classPrefix}-header-button ${props.canCommit ? '' : classPrefix + '-header-confirm-disable'}`}
          onClick={() => {
            props.canCommit && props.onConfirm?.();
          }}
        >
          {props.confirmText || "确定"}
        </a>
      </div>
    </div>
  </Wrapper>
}
