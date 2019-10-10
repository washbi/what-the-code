export class StoreBase {

  protected getStore(): any {
    throw new Error('please implement this function in the inherited child class');
  }

  public getAllDocs(): Promise<any> {
    return this.getStore().allDocs({include_docs: true})
      .then(docs => {
        return Promise.resolve(docs.rows.map(row=>row.doc));
      }).catch(err => {
        return Promise.reject(err);
      });
  }

  public getItem(id: string): Promise<any> {
     return this.getStore().get(id); // pouch actually looks for item._id
  }

  public addNewItem(newItem): Promise<any> {
    newItem._id = `${newItem.id}`;
    return this.getStore().put(newItem)
      .then(() => console.log('added new item to pouch store'))
      .catch(err => { console.error('failed to add new item to pouch store', err)});
  }

  public updateExistingItem(newItem, currItem): Promise<any> {
    newItem._rev = currItem._rev;
    return this.getStore().put(newItem)
      .then(() => console.log('update existing item to pouch store'))
      .catch(err => console.error('failed to update existing item to pouch store', err));
  }


  public async clearAllDocs(storeName: string): Promise<any> {
    let allDocs = await this.getAllDocs();

    let promises = [];
    allDocs.forEach(doc => {
      promises.push(this.clearItem(doc));
    });

    return Promise.all(promises)
      .then(() => console.log(`cleared docs from pouch store ${storeName}`))
      .catch(err => console.error(`clearing docs from pouch store ${storeName} failed`, err));
  }

  private async clearItem(item): Promise<any> {
    const doc = await this.getStore().get(item._id);
    item._rev = doc._rev;
    item.customDeleted = true;
    return this.getStore().put(item).then(() => console.log('item cleared from pouch store'));
  }
}
