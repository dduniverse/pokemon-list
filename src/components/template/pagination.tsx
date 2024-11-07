import {useRouter} from 'next/router';
import {PokemonsListParam} from '@/services/pokemon/types';
import {useEffect, useState} from 'react';
import {Dropdown, Pagination as SemanticPagination} from 'semantic-ui-react';

interface PaginationProps {
  totalCount: number;
  totalPages: number;
  listParams: PokemonsListParam;

  setListParams: (param: any) => void;
}

export default function Pagination(props: PaginationProps) {
  const {totalCount, totalPages, listParams, setListParams} = props;
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const limitOptions = [
    {key: '20', value: 20, text: '20'},
    {key: '50', value: 50, text: '50'},
    {key: '100', value: 100, text: '100'},
    {key: totalCount, value: totalCount, text: 'All'},
  ];

  useEffect(() => {
    const page = Number(router.query.page) || 1;
    const limit = Number(router.query.limit) || 20;

    setCurrentPage(page);
    setListParams({
      page,
      limit,
    });

    if (!router.query.page || !router.query.limit) {
      router.replace({
        pathname: router.pathname,
        query: {...router.query, page, limit},
      });
    }
  }, [router.query.page, router.query.limit]);

  const handlePageChange = (e: React.MouseEvent, {activePage}: any) => {
    const page = Number(activePage);
    setCurrentPage(page);

    router.push({
      pathname: router.pathname,
      query: {...router.query, page, limit: listParams.limit || 20},
    });
    updateURL(page);
  };

  const updateURL = (page: number) => {
    router.push({
      pathname: router.pathname,
      query: {...router.query, page},
    });
  };

  const handleLimitChange = (e: any, {value}: {value: number}) => {
    setListParams((prev: object) => ({
      ...prev,
      limit: value,
    }));
    setCurrentPage(1);
    router.push({
      pathname: router.pathname,
      query: {...router.query, page: 1, limit: value},
    });
  };

  const defaultLimitValue = router.query.limit ? Number(router.query.limit) : listParams.limit;

  return (
    <div
      data-testid="pagination"
      className="flex flex-col sm:flex-row justify-between items-center z-10 py-2 relative border-t-2 border-gray-100 bg-gray-50 px-6"
    >
      <div className="flex-grow flex justify-between">
        <SemanticPagination
          totalPages={totalPages}
          activePage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>

      <div className="w-full sm:w-auto flex justify-end mt-4 sm:mt-0" style={{userSelect: 'none'}}>
        <Dropdown
          inline
          selection
          // className="w-24"
          options={limitOptions}
          onChange={handleLimitChange}
          defaultValue={limitOptions.find((option) => option.value === defaultLimitValue)?.value}
        />
      </div>
    </div>
  );
}