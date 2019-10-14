@Service
@Transactional(propagation = Propagation.REQUIRED)
public class OplApiService {

  @Autowired
  private TransactionTemplate transactionTemplate;

  private static final Logger L = LoggerFactory.getLogger(OplApiService.class);

  public OplSyncResponseTO sync(long userId, OplSyncRequestTO request) {

    saveNewProducts(request.getNewProducts());
    saveNewCardboards(request.getNewCardboards());

    return anything;
  }

  private List<OplProduct> saveNewProducts(Set<OplProductTO> newProductsSource) {
    return transactionTemplate.execute(new TransactionCallback<List<OplProduct>>() {
        @Override
        public List<OplProduct> doInTransaction(TransactionStatus transactionStatus) {
            return newProductsSource.stream()
                    .map(newProduct -> productRepository.save(createOrSaveProduct(newProduct)))
                    .collect(Collectors.toList());
        }
    });
  }

  private void saveNewCardboards(Set<OplCardboardTO> newCardboardsSource) {
    transactionTemplate.execute(new TransactionCallbackWithoutResult() {
        @Override
        protected void doInTransactionWithoutResult(TransactionStatus transactionStatus) {
            newCardboardsSource.forEach(newCardboard -> {
                try {
                    cardboardRepository.save(createCardboard(newCardboard));
                } catch (AlreadyExistsException e) {
                    L.info(e.getMessage());
                }
            });
        }
    });
  }
}
