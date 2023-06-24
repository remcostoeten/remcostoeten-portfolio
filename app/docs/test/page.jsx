'use client';
import withAuth from '../../../lib/withAuth';

const page = () => {
    return <h1>test</h1>;
};

export default withAuth(page);
