import { FC, memo, useCallback } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Select } from "shared/ui/Select/Select";
import { Country } from "../model/types/country";
import { useTranslation } from "react-i18next";

interface Props {
    className?: string;
    value?: Country;
    readonly?: boolean;
    onChange?: (value: Country) => void;
}

const options = [
    { value: Country.RUSSIA, content: Country.RUSSIA },
    { value: Country.UKRAINE, content: Country.UKRAINE },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.BELARUS, content: Country.BELARUS },
    { value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN },
];
const CountrySelectComponent: FC<Props> = (props) => {
    const { className, value, onChange, readonly } = props;

    const onChangeCountry = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange]
    );
    const { t } = useTranslation();
    return (
        <Select
            className={classNames("", {}, [className])}
            value={value}
            label={t("Ваша страна")}
            options={options}
            onChange={onChangeCountry}
            readonly={readonly}
        />
    );
};

export const CountrySelect = memo(CountrySelectComponent);
