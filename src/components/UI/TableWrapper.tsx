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
  title: string;
};

const TableWrapper = ({ caption, headers, tableRows, title }: Props) => {
  return (
    <section className="flex flex-col gap-3 p-2 pb-10 shadow-box-shadow-1 rounded-xl overflow-x-auto">
      <span className="font-bold">{title}</span>
      <Table className="">
        <TableCaption>{caption}</TableCaption>
        <TableHeader>
          <TableRow>
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
