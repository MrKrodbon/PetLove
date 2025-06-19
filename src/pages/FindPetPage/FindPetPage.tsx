import PageTemplate from "../../components/PageTemplate/PageTemplate";

const FindPet = () => {
  // return (
  //   <Container>
  //     <HeaderWrapper>
  //       <Header />
  //     </HeaderWrapper>
  //     <NewsContainer isFlexChange>
  //       <Title>Find your favourite pet</Title>
  //       <FilterSearchField />
  //       <ItemList isPetList />
  //     </NewsContainer>
  //     <div className="flex flex-row justify-center w-full">
  //       <Pagination paginationList={petList} currentPage={currentPage} />
  //     </div>
  //   </Container>
  // );

  // const {
  //   title = "",
  //   petList = [],
  //   currentPage = 1,
  // } = usePageData({
  //   pageType: "petList",
  // });
  return <></>;
  return (
    <PageTemplate
      title={title}
      itemsList={petList}
      currentPage={currentPage}
      listType={"petList"}
    />
  );
};

export default FindPet;
