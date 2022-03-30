// noinspection JSUnresolvedVariable

import React, { useEffect, useState } from "react";
import Select from "react-select";

export const ProductOptions = (props) => {
  let { updateColor, updatePower, updateStorage, updateQuantity } = props;
  const productOptions = [];
  props.options.map((option) => productOptions.push(option));

  const colorOptions = productOptions
    .map((option) => option.color)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((color) => ({ label: color, value: color }));

  const [powerOptions, setPowerOptions] = useState([]);
  const [storageOptions, setStorageOptions] = useState([]);
  const [quantityNumber, setQuantityNumber] = useState([]);

  function checkSubOptions(chosenColor) {
    updateColorState(chosenColor);

    setPowerOptions(
      productOptions
        .filter(
          (option) =>
            chosenColor && option.color === chosenColor.value && option.power
        ) //get the power values matching chosen color
        .map((option) => option.power)
        .filter((v, i, a) => a.indexOf(v) === i)
        .map((power, index) => ({
          label: power[index],
          value: power[index],
        }))
    );

    setStorageOptions(
      productOptions
        .filter(
          (option) =>
            chosenColor && option.color === chosenColor.value && option.storage
        )
        .map((option) => option.storage)
        .filter((v, i, a) => a.indexOf(v) === i)
        .map((storage, index) => ({
          label: storage[index],
          value: storage[index],
        }))
    );

    setQuantityNumber(
      productOptions
        .filter(
          (option) =>
            chosenColor && option.color === chosenColor.value && option.quantity
        )
        .map((option) => option.quantity)
        .filter((v, i, a) => a.indexOf(v) === i)
        .map((quantity) => ({ label: quantity, value: quantity }))
    );
  }

  useEffect(() => {
    setPowerOptions(powerOptions);
  }, [powerOptions]);

  useEffect(() => {
    setStorageOptions(storageOptions);
  }, [storageOptions]);

  useEffect(() => {
    setQuantityNumber(quantityNumber);
  }, [quantityNumber]);

  // Create options for dropdown that ranges between 0 to products quantity
  let quantityValue = quantityNumber.length > 0 ? quantityNumber[0].value : 0;
  let quantityOptions = Array.from(Array(quantityValue + 1).keys());
  quantityOptions = quantityOptions.map((quantity) => ({
    label: quantity,
    value: quantity,
  }));

  function updateColorState(state) {
    updateColor(state);
  }

  function updatePowerState(state) {
    updatePower(state);
  }

  function updateStorageState(state) {
    updateStorage(state);
  }

  function updateQuantityState(state) {
    updateQuantity(state);
  }

  return (
    <div>
      <div className="col">
        <h6>Color:</h6>
        <Select onChange={checkSubOptions} options={colorOptions} />
      </div>

      {powerOptions.length > 0 && (
        <div className="col">
          <h6>Power:</h6>
          <Select onChange={updatePowerState} options={powerOptions} />
        </div>
      )}

      {storageOptions.length > 0 && (
        <div className="col">
          <h6>Storage:</h6>
          <Select onChange={updateStorageState} options={storageOptions} />
        </div>
      )}

      {(powerOptions.length > 0 || storageOptions.length > 0) &&
        quantityOptions.length > 0 && (
          <div className="col">
            <h6>Quantity: </h6>
            <Select onChange={updateQuantityState} options={quantityOptions} />
          </div>
        )}
    </div>
  );
};
