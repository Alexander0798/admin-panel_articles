import { Currency } from "../../model/types/currency";
import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";

interface Props {
    className?: string;
    value?: string;
    readonly?: boolean;
    onChange?: (value: Currency) => void;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
];

const CurrencySelectComponent: FC<Props> = (props) => {
    const { t } = useTranslation();
    const { className, value, onChange, readonly } = props;
    const onChangeCurrency = useCallback(
        (value: string) => {
            onChange?.(value as Currency);
        },
        [onChange]
    );
    return (
        <Select
            className={classNames("", {}, [className])}
            value={value}
            label={t("Ваша валюта")}
            options={options}
            onChange={onChangeCurrency}
            readonly={readonly}
        />
    );
};

export const CurrencySelect = memo(CurrencySelectComponent);
