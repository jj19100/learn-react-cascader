import React, { useMemo, useState } from "react";
import { useCallback, useEffect } from "react";
import { Wrapper } from "./style";

const classPrefix = `antdm-cascader-view`

export const CascaderContent = function ({ visible = false, ...props }) {
  const [tabActiveIndex, setTabActiveIndex] = useState(0);
  const [value, setValue] = useState(props.value || props.defaultValue || []);
  const [loading, setLoading] = useState(true);

  const levels = useMemo(() => {
    const ret = []
    let currentOptions = props.options
    let reachedEnd = false
    for (const v of value) {
      const target = currentOptions.find(option => option.value === v)
      ret.push({
        selected: target,
        options: currentOptions,
      })
      if (!target || !Array.isArray(target.children) || target.children.length === 0) {
        reachedEnd = true
        break
      }
      currentOptions = target.children
    }
    if (!reachedEnd) {
      ret.push({
        selected: undefined,
        options: currentOptions,
      })
    }
    return ret;
  }, [props.options, value])

  const onChange = useCallback((item, index) => {
    if (item?.disabled) {
      return
    }
    const newValue = [...value.slice(0, index), item.value];
    setValue(newValue);
    props.onSelect?.(newValue)
  }, [value, props.onSelect])

  useEffect(() => {
    const max = levels.length - 1
    if (tabActiveIndex > max) {
      setTabActiveIndex(max)
    }
  }, [tabActiveIndex, levels])

  useEffect(() => {
    setTabActiveIndex(levels.length - 1)
  }, [value])

  useEffect(() => {
    if (visible) {
      setValue(props.value || props.defaultValue || []);
    }
  }, [visible])

  useEffect(() => {
    setValue(props.value || props.defaultValue || [])
  }, [props.value, props.defaultValue])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (props.options?.length === 0) {
        setLoading(false)
      }
      return () => {
        clearTimeout(timer)
      }
    }, 3000);
  }, [])

  useEffect(() => {
    if (props.options.length !== 0) {
      setLoading(false)
    }
  }, [props.options])
  
  return <Wrapper>
    <div className={classPrefix}>
      <div className={`${classPrefix}-tabs`}>
        {levels.map((item, index) => {
          return <div
            key={index}
            onClick={() => { setTabActiveIndex(index) }}
            className={`${classPrefix}-tab ${tabActiveIndex === index && classPrefix + "-tab-active"}`}>
            {item?.selected?.label ? item?.selected?.label : item?.selected?.label === "" ? "" : "请选择"}
          </div>
        })}
      </div>
      <div className={`${classPrefix}-content`}>
        {!loading ? levels.map((item, index) => {
          return <div
            key={index.toString()}
            style={{ display: index === tabActiveIndex ? "block" : "none" }}
            className={`${classPrefix}-list`} >
            {item.options.map((o, i) => {
              return <div key={i.toString()} className={`${classPrefix}-item ${o.value === item?.selected?.value && classPrefix + "-item-active"}`}>
                <div
                  onClick={() => onChange(o, index)}
                  className={`${classPrefix}-item-main ${o?.disabled && classPrefix + "-item-disabled"}`}>
                  {o.label}
                </div>
                {o.value === item?.selected?.value && <div className={`${classPrefix}-item-extra`}>✓</div>}
              </div>
            })}
          </div>
        }) : "loading..."}
      </div>
    </div>
  </Wrapper>
}