import React, { useState, useCallback, useEffect } from "react";
import { Popup } from "antd-mobile";
import { CascaderHead } from "./CascaderHead/CascaderHead";
import { CascaderContent } from "./CascaderContent/CascaderContent";
import { Wrapper } from "./style";

export const CascaderModal = function (props) {
  const [value, setValue] = useState(props.value || props.defaultValue || []);
  const [canCommit, setCanCommit] = useState(false);

  const onChange = useCallback((v) => {
    setValue(v);
    props.onSelect?.(v)
  }, [props.onSelect])

  const onConfirm = useCallback(() => {
    props.onConfirm?.(value)
  }, [props.onConfirm, value])

  const onCancel = useCallback(() => {
    props.onCancel?.()
  }, [props.onCancel])

  useEffect(() => {
    if (value.length === 0) {
      return;
    }
    let children = props.options;
    let i = 0;
    for (i; i < value.length; i++) {
      const obj = children.find(item => item.value === value[i]);
      if (!obj) {
        children = undefined;
        break;
      } else {
        children = obj.children
      }
    }
    setCanCommit(!Array.isArray(children) || children.length === 0)
  }, [value, props.options])

  useEffect(() => {
    setValue(props.value || props.defaultValue || [])
  }, [props.value, props.defaultValue])

  useEffect(() => {
    if (props.visible) {
      setCanCommit(false);
    }
  }, [props.visible])

  return <Wrapper>
    <Popup
      className="antdm-cascader-modal"
      visible={props.visible}
      onClose={onCancel}
      animationType="slide-up"
      popup={true}
    >
      <CascaderHead {...props} canCommit={canCommit} onCancel={onCancel} onConfirm={onConfirm} />
      <CascaderContent {...props} visible={props.visible} onSelect={onChange} />
    </Popup>
  </Wrapper>
}