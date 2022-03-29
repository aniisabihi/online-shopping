// noinspection JSUnresolvedVariable

import React from "react";
import Select from "react-select";
//import { useLocation } from "react-router";

export const ProductOptions = (props) => {
  //const location = useLocation();
  //const { product } = location.state;
  const { options } = props;
  const [color, setColor] = React.useState();
  const [power, setPower] = React.useState();
  const [storage, setStorage] = React.useState();
  const [quantity, setQuantity] = React.useState();
  //let [optionIndex, setOptionIndex] = React.useState(product.index);

  // useEffect(() => {
  //
  //   options[optionIndex].power = setPower;
  //   options[optionIndex].storage = setStorage;
  //   options[optionIndex].quantity = -setQuantity;
  // }, [optionIndex, options]);

  const colorOptions = options
    .map((option) => option.color)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((color) => ({ label: color, value: color }));

  let powerOptions = options
    .filter((option) => color && option.color === color.value && option.power)
    .map((option) => option.power)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((power, index) => ({
      label: power[index],
      value: power[index],
    }));

  const storageOptions = options
    .filter((option) => color && option.color === color.value && option.storage)
    .map((option) => option.storage)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((storage, index) => ({
      label: storage[index],
      value: storage[index],
    }));

  const quantityObject = options
    .filter(
      (option) => color && option.color === color.value && option.quantity
    )
    .map((option) => option.quantity)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((quantity) => ({ label: quantity, value: quantity }));

  let quantityValue = quantityObject.length > 0 ? quantityObject[0].value : 0;
  let quantityOptions = Array.from(Array(quantityValue + 1).keys());
  quantityOptions = quantityOptions.map((quantity) => ({
    label: quantity,
    value: quantity,
  }));

  /*let handleChange = () => {
    setColor(color);
    optionIndex = options.findIndex((color) => color.value === { color });
    setOptionIndex(optionIndex);
    console.log(optionIndex);
  };*/

  return (
    <div>
      <div className="col">
        <h6>Color:</h6>
        <Select value={color} onChange={setColor} options={colorOptions} />
      </div>

      {powerOptions.length > 0 && (
        <div className="col">
          <h6>Power:</h6>
          <Select value={power} onChange={setPower} options={powerOptions} />
        </div>
      )}

      {storageOptions.length > 0 && (
        <div className="col">
          <h6>Storage:</h6>
          <Select
            value={storage}
            onChange={setStorage}
            options={storageOptions}
          />
        </div>
      )}

      {(powerOptions.length > 0 || storageOptions.length) &&
        quantityOptions.length > 0 && (
          <div className="col">
            <h6>Quantity: </h6>
            <Select
              value={quantity}
              onChange={setQuantity}
              options={quantityOptions}
            />
          </div>
        )}
    </div>
  );
};
