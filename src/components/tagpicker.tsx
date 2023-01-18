import { TagPicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import React from 'react';

const data = [
    'Son of a Priest',
    'Cowboy',
    'Wife beater',
    'Inbred',
    'Shotgun',
    'Gambler',
    'Outlaw',
    'Bounty hunter',
    'Orphan',
    'Sheriff',
    'Veteran',
].map((item) => ({ label: item, value: item }));

const styles = { width: 300, display: 'block', marginBottom: 10 };

const TagPickerComponent = (props: any) => (
    <>
        <TagPicker
            onSelect={props.handleChange}
            size="lg"
            placeholder="Select your gunslinger traits"
            data={data}
            style={styles}
        />
    </>
);

export default TagPickerComponent;
