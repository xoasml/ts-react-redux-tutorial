import React from 'react';
import Counter from "../components/Counter";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../modules";
import {decrease, increase, increaseBy} from "../modules/counter";

function CounterContainer() {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase());
    }

    const onDecrease = () => {
        dispatch(decrease());
    }

    const inIncreaseBy = (diff: number) => {
        dispatch(increaseBy(diff));
    }

    return (
        <Counter
            count={count}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onIncreaseBy={inIncreaseBy}
        />
    )
}

export default CounterContainer;
