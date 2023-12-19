import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
} from '@nextui-org/react';
import { columns, users, statusOptions } from '../Constants/TableRequestsData';
import { Avatar, AvatarGroup } from '@nextui-org/react';

import {
  CheckIcon,
  CrossIcon,
  MailIcon,
  SearchIcon,
  TrashIcon,
} from '../Shared/Icons';

const statusColorMap: Record<string, ChipProps['color']> = {
  active: 'success',
  paused: 'danger',
  vacation: 'warning',
};

const INITIAL_VISIBLE_COLUMNS = ['name', 'course', 'price', 'date', 'actions'];

type User = (typeof users)[0];

export default function RequestsTable() {
  const [filterValue, setFilterValue] = React.useState('');
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );

  const selectedIds: string[] = Array.from(selectedKeys) as string[];
  const selectedIdsNb = selectedIds.map((id) => parseInt(id));

  const [visibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter] = React.useState<Selection>('all');
  const [rowsPerPage, setRowsPerPage] = React.useState(6);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: 'price',
    direction: 'ascending',
  });

  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === 'all') return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) => {
        const nameMatch = user.name
          .toLowerCase()
          .includes(filterValue.toLowerCase());
        const courseMatch = user.course
          ?.toLowerCase()
          .includes(filterValue.toLowerCase());
        return nameMatch || courseMatch;
      });
    }
    if (
      statusFilter !== 'all' &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      );
    }

    return filteredUsers;
  }, [users, filterValue, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortByDate = (items: User[], order: string) => {
    return items.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      const timeDiffA = Math.abs(dateA.getTime() - new Date().getTime());
      const timeDiffB = Math.abs(dateB.getTime() - new Date().getTime());
      return order === 'ascending'
        ? timeDiffA - timeDiffB
        : timeDiffB - timeDiffA;
    });
  };

  const sortByPrice = (items: User[], order: string) => {
    return items.sort((a, b) => {
      return order === 'ascending' ? a.price - b.price : b.price - a.price;
    });
  };

  const sortedItems = React.useMemo(() => {
    if (sortDescriptor.column === 'date' && sortDescriptor.direction) {
      return sortByDate([...items], sortDescriptor.direction);
    } else if (sortDescriptor.column === 'price' && sortDescriptor.direction) {
      return sortByPrice([...items], sortDescriptor.direction);
    }
  }, [sortDescriptor, items]);

  function convertDateFormat(inputDate: string) {
    const monthMap = {
      Jan: 1,
      Feb: 2,
      Mar: 3,
      Apr: 4,
      Mai: 5,
      Jun: 6,
      Jul: 7,
      Aug: 8,
      Sep: 9,
      Oct: 10,
      Nov: 11,
      Dec: 12,
    };

    const parts = inputDate.split(' ');

    const month = monthMap[parts[0] as keyof typeof monthMap];
    const day = parseInt(parts[1]);
    const year = parseInt(parts[2]);

    const formattedDate = `${day.toString().padStart(2, '0')}/${month
      .toString()
      .padStart(2, '0')}/${year}`;

    return formattedDate;
  }

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case 'name':
        return (
          <User
            avatarProps={{ radius: 'full', src: user.avatar, size: 'lg' }}
            description={user.role}
            classNames={{
              description: 'text-[14px] font-semibold',
            }}
            name={cellValue}>
            {user.email}
          </User>
        );
      case 'role':
        return (
          <p className="text-bold text-sm capitalize text-[#525966]">
            {user.role}
          </p>
        );
      case 'course':
        return (
          <p className="text-bold text-sm font-semibold capitalize text-[#525966]">
            {user.course}
          </p>
        );
      case 'price':
        return (
          <p className="text-bold text-sm capitalize text-[#1F1F1F] font-bold">
            ${user.price}
          </p>
        );
      case 'date':
        return (
          <p className="text-bold text-sm capitalize text-[#525966] font-semibold ">
            {convertDateFormat(user.date)}
          </p>
        );

      case 'status':
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat">
            {cellValue}
          </Chip>
        );
      case 'actions':
        return (
          <div className="relative flex justify-end items-center gap-2">
            <p className="text-[#525966]">View course</p>
            <Button
              isIconOnly
              size="sm"
              variant="light"
              className="bg-[#F5F5F5]">
              <CrossIcon />
            </Button>
            <Button
              isIconOnly
              size="sm"
              variant="light"
              className="bg-[#F09272]">
              <CheckIcon />
            </Button>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue('');
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue('');
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex justify-between gap-3 items-end px-8 pt-5">
        <Input
          isClearable
          radius={`full`}
          className="w-[440px] border-spacing-8 hover:!bg-transparent"
          placeholder="Search requests by name or course"
          startContent={<SearchIcon />}
          value={filterValue}
          onClear={() => onClear()}
          onValueChange={onSearchChange}
        />
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    users.length,
    hasSearchFilter,
  ]);

  console.log('selectedKeys', selectedKeys);

  const bottomContent = React.useMemo(() => {
    return (
      <div className=" pb-[26px] px-2 flex flex-col justify-center items-center relative">
        <div
          className={`w-[80%] h-[120px] bg-[#525966] top-[-1.5rem] rounded-[20px] relative items-center px-11 justify-between text-white ${
            (selectedKeys as Set<React.Key>).size > 0 || selectedKeys === 'all'
              ? 'flex'
              : 'hidden'
          }`}>
          <div className="flex items-center">
            <div className="">
              <AvatarGroup
                max={3}
                size="md"
                total={10}
                renderCount={() => (
                  <p className=" text-white font-semibold ms-2">
                    {selectedKeys !== 'all'
                      ? `+${selectedKeys.size} admins selected`
                      : 'All admins selected'}
                  </p>
                )}>
                {users
                  .filter((user) => selectedIdsNb.includes(user.id))
                  .map((user) => (
                    <Avatar src={user.avatar} />
                  ))}
              </AvatarGroup>
            </div>
            <div className=" "></div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              startContent={<MailIcon />}
              className="bg-[#1F1F1F] rounded-full w-[216px] h-[60px] text-white font-semibold">
              Send invite again
            </Button>
            <Button
              startContent={<TrashIcon />}
              className="bg-[#1F1F1F] rounded-full w-[146px] h-[60px] text-white font-semibold">
              Remove
            </Button>
          </div>
        </div>

        <Pagination
          isCompact
          showControls
          showShadow
          color="warning"
          className="text-white"
          page={page}
          total={pages}
          onChange={setPage}
        />
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <>
      <Table
        aria-label="Example table with custom cells, pagination and sorting"
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        checkboxesProps={{
          classNames: {
            wrapper: 'after:bg-warning after:text-background text-background',
          },
        }}
        classNames={{
          wrapper: 'max-h-full rounded-b-lg p-0',
          th: [
            'bg-transparent',
            'text-[#1F1F1F]',
            'font-extrabold',
            'border-y',
            'border-divider',
            'px-[30px]',
            'py-[20px]',
            'text-[15px]',
          ],
          tr: ['!shadow-none'],
          td: ['px-[30px]', 'py-[15px]'],
        }}
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="inside"
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}>
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === 'actions' ? 'center' : 'start'}
              allowsSorting={column.sortable}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={'No users found'} items={sortedItems}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
