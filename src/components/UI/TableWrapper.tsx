import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";

type Props = {
  headers: string[];
  tableRows: JSX.Element[];
  caption: string;
  title?: string;
};

const TableWrapper = ({ caption, headers, tableRows, title }: Props) => {
  return (
    <section className="flex flex-col gap-3 p-2 pb-10 article-sidebar:overflow-x-auto">
      {title && <span className="font-bold">{title}</span>}
      <Table className="shadow-box-shadow-1 bg-main-secondary-bg rounded-xl article-sidebar:min-w-[40rem]">
        <TableCaption>{caption}</TableCaption>
        <TableHeader className="">
          <TableRow className="bg-main-green-200 text-main-black">
            <TableHead className="text-right rounded-tr-xl" key={"counter"}>
              #
            </TableHead>
            {headers.map((head, idx) => (
              <TableHead className="text-center" key={idx}>
                {head}
              </TableHead>
            ))}
            <TableHead className="text-center rounded-tl-xl" key={"btn"}>
              عملیات
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{tableRows}</TableBody>
      </Table>
    </section>
  );
};

export default TableWrapper;
