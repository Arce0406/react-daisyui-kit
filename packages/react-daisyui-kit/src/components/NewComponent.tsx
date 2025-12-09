
interface NewComponentProps {
  children?: React.ReactNode;
}

export default function NewComponent({
  children,
}: NewComponentProps) {
  return (
    <div>{children}</div>
  )
}

// import React from 'react';
// const NewComponent: React.FC = () => <div>NewComponent</div>;
// export default NewComponent;