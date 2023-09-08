export interface ItemProps {
  text: string;
  caption: string;
  checked?: boolean;
}

const CheckItem = ({ text, caption, checked = false }: ItemProps) => {
  return (
    <li py-1>
      <div flex="~ col">
        <span text-greyness-deep>{text}</span>
        <span text-greyness-tint>{caption}</span>
      </div>
    </li>
  );
};

export default CheckItem;